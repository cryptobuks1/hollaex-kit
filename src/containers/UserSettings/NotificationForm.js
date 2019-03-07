import React from 'react';
import { reduxForm } from 'redux-form';
// import { isMobile } from 'react-device-detect';

import renderFields from '../../components/Form/factoryFields';
import { FieldError } from '../../components/Form/FormFields/FieldWrapper';
import { Button, Accordion } from '../../components';
// import { required } from '../../components/Form/validations';
import { getErrorLocalized } from '../../utils/errors';
import STRINGS from '../../config/localizedStrings';

export const generateNotificationFormValues = () => ({
    popup_order_confirmation: {
        type: 'toggle',
        label: STRINGS.USER_SETTINGS.NOTIFICATION_FORM.POPUP_ORDER_CONFIRMATION,
        className: 'toggle-wrapper'
    },
    popup_order_completed: {
        type: 'toggle',
        label: STRINGS.USER_SETTINGS.NOTIFICATION_FORM.POPUP_ORDER_COMPLETED,
        className: 'toggle-wrapper'
    },
    popup_order_partially_filled: {
        type: 'toggle',
        label: STRINGS.USER_SETTINGS.NOTIFICATION_FORM.POPUP_ORDER_PARTIALLY_FILLED,
        className: 'toggle-wrapper'
    }
});

const Form = ({
    handleSubmit,
    submitting,
    pristine,
    error,
    valid,
    initialValues,
    formFields
}) => (
        <form onSubmit={handleSubmit}>
            {renderFields(formFields)}
            {error && <div className="warning_text">{getErrorLocalized(error)}</div>}
            <Button
                className="mt-4"
                label={STRINGS.SETTING_BUTTON}
                disabled={pristine || submitting || !valid}
            />
        </form>
    );

const NotificationForm = (props) => {
    const section = [{
        title: STRINGS.USER_SETTINGS.NOTIFICATION_FORM.TRADE_POPUPS,
        content: <Form {...props} />
    }]
    return <Accordion sections={section} />
}

export default reduxForm({
    form: 'NotificationForm'
})(NotificationForm);
