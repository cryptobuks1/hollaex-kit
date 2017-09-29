import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';

import { ICONS } from '../../config/constants';
import { resetPassword, otpRequest, otpActivate, otpSetActivated, otpRevoke } from '../../actions/userAction';
import { Accordion, Dialog, SuccessDisplay, CheckboxButton, OtpForm } from '../../components';
import { errorHandler } from '../../components/OtpForm/utils';
import ChangePasswordForm from './ChangePasswordForm';
import { OTP, renderOTPForm } from './OTP';

class UserVerification extends Component {
  state = {
    sections: [],
    dialogIsOpen: false,
    modalText: '',
  }

  componentDidMount() {
    this.calculateSections(this.props.user);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.user.otp.requested !== this.props.user.otp.requested ||
      nextProps.user.otp.requesting !== this.props.user.otp.requesting ||
      nextProps.user.otp.activated !== this.props.user.otp.activated ||
      nextProps.user.otp_enabled !== this.props.user.otp_enabled
    ) {
      this.calculateSections(nextProps.user);
    }

    if (nextProps.user.otp.requested && nextProps.user.otp.requested !== this.props.user.otp.requested) {
      this.setState({ dialogIsOpen: true, modalText: '' })
    } else if (nextProps.user.otp.error !== this.props.user.otp.error) {
      this.setState({ dialogIsOpen: true, modalText: nextProps.user.otp.error })
    }
  }


  calculateSections = (user) => {
    const { otp_enabled, otp, email } = user;

    const sections = [{
      title: 'Two-Factor Authentication',
      content: (
        <OTP
          requestOTP={this.handleOTPCheckbox}
          data={otp}
          otp_enabled={otp_enabled}
        >
          {otp_enabled &&
            <div className="d-flex flex-column">
              <CheckboxButton
                label="Require OTP when logging in"
                checked={true}
              />
              <CheckboxButton
                label="Require OTP when withdrawing funds"
                checked={true}
              />
            </div>
          }
        </OTP>
      ),
      notification: {
        text: otp_enabled ? 'otp enabled' : 'PLEASE TURN ON 2FA',
        status: otp_enabled ? 'success' : 'warning',
        iconPath: otp_enabled ? ICONS.CHECK : ICONS.RED_ARROW,
        allowClick: !otp_enabled
      }
    },
    {
      title: 'Change Password',
      content: <ChangePasswordForm onSubmit={this.onSubmitChangePassword} />,
      disabled: false,
      notification: {
        text: 'active',
        status: 'success',
        iconPath: ICONS.CHECK,
        allowClick: true
      }
    }];

    this.setState({ sections });
  }

  handleOTPCheckbox = (checked = false) => {
    if (checked) {
      this.props.requestOTP();
    } else {
      // TODO cancel otp
      console.log('caaaancel');
      this.setState({ dialogIsOpen: true, modalText: '' });
    }
  }

  onSubmitActivateOtp = (values) => {
    return otpActivate(values)
      .then((res) => {
        this.props.otpSetActivated(true);
        this.accordion.closeAll();
        this.setState({ dialogIsOpen: true, modalText: 'You have successfully activated the OTP' });
      })
      .catch((err) => {
        console.log(err.response.data)
        const _error = err.response.data ? err.response.data.message : err.message
        throw new SubmissionError({ code: _error })
      });
  }

  onSubmitChangePassword = (values) => {
    return resetPassword({
      old_password: values.old_password,
      new_password: values.new_password,
    })
      .then((res) => {
        this.accordion.closeAll();
        this.setState({ dialogIsOpen: true, modalText: 'You have successfully changed your password' });
      })
      .catch((err) => {
        console.log(err.response.data)
        const _error = err.response.data ? err.response.data.message : err.message
        throw new SubmissionError({ _error })
      });
  }

  onSubmitCancelOTP = (values) => {
    return new Promise((resolve) => resolve())
    // return otpRevoke(values)
      .then(() => {
        this.props.otpSetActivated(false);
        this.setState({ dialogIsOpen: true, modalText: 'You have successfully revoked your OTP' });
      })
      .catch(errorHandler);
  }

  setRef = (el) => {
    this.accordion = el;
  }

  renderModalContent = () => {
    const text = 'You have successfully activated OTP';
    return <SuccessDisplay onClick={this.onCloseDialog} text={this.state.modalText} />
  }

  onCloseDialog = () => {
    this.setState({ dialogIsOpen: false });
  }

  renderModalContent = ({ requested, activated, secret, error }, otp_enabled, email, modalText) => {
    // if (error) {
    //   console.log('-----------', 0)
    //   return <SuccessDisplay onClick={this.onCloseDialog} text={error} success={false} />
    // } else
    if (otp_enabled) {
      console.log('-----------', 1)
      return <OtpForm onSubmit={this.onSubmitCancelOTP} />;
    } else if (requested && !activated) {
      console.log('-----------', 2)
      return renderOTPForm(secret, email, this.onSubmitActivateOtp);
    } else {
      console.log('-----------', 3)
      return <SuccessDisplay onClick={this.onCloseDialog} text={modalText} success={!error} />
    }
  }

  render() {
    if (this.props.user.verification_level === 0) {
      return <div>Loading</div>;
    }
    const { sections, dialogIsOpen, modalText } = this.state;
    const { otp, email, otp_enabled } = this.props.user;
    return (
      <div>
        <Accordion
          sections={sections}
          ref={this.setRef}
        />
        <Dialog
					isOpen={dialogIsOpen && !otp.requesting}
					label="security-modal"
					onCloseDialog={this.onCloseDialog}
				>
          {dialogIsOpen && !otp.requesting ? this.renderModalContent(otp, otp_enabled, email, modalText) : <div></div>}
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  requestOTP: () => dispatch(otpRequest()),
  otpSetActivated: (active) => dispatch(otpSetActivated(active)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserVerification);
