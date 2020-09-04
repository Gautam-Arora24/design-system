import * as React from 'react';
import { Input, Button, Heading, Label, Icon, Link, Card } from '@/index';

interface BasicFormState {
  signInDisabled: boolean;
  passwordVisible: boolean;
  password: string;
}

class BasicForm extends React.Component<{}, BasicFormState> {
  private emailRef: React.RefObject<HTMLInputElement>;

  constructor(props = {}) {
    super(props);

    this.state = {
      signInDisabled: true,
      passwordVisible: false,
      password: ''
    };

    this.emailRef = React.createRef();
  }

  onEmailChange = (event: any) => {
    const newPassword = this.state.password;
    const email = event.target.value;
    const disabled = !newPassword || !email;

    this.setState({
      signInDisabled: disabled
    });
  }

  onPasswordChange = (event: any) => {
    const email = this.emailRef.current?.value;
    const newPassword = event.target.value;
    const disabled = !newPassword || !email;

    this.setState({
      password: newPassword,
      signInDisabled: disabled
    });
  }

  onActionClick = () => {
    this.setState({
      passwordVisible: !this.state.passwordVisible
    });
  }

  render() {
    return (
      <div style={{ width: '350px' }}>
        <Card className="px-6 py-6">
          <Heading className="mb-7" size="m">Login</Heading>
          <Label withInput={true}>Email</Label>
          <Input
            name="input"
            type="text"
            placeholder="Enter email"
            className="mb-6"
            ref={this.emailRef}
            autocomplete={'off'}
            onChange={this.onEmailChange}
          />
          <Label withInput={true}>Password</Label>
          <Input
            name="input"
            className="mb-4"
            placeholder="Enter password"
            autocomplete={'off'}
            type={this.state.passwordVisible ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.onPasswordChange}
            actionIcon={(
              <Icon
                name={this.state.passwordVisible ? 'visibility' : 'visibility_off'}
                onClick={this.onActionClick}
              />
            )}
          />
          <Link target="_blank" href="#">Forgot Password?</Link>
          <Button
            className="mt-7"
            appearance="primary"
            expanded={true}
            disabled={this.state.signInDisabled}
          >
            Sign In
          </Button>
        </Card>
      </div>
    );
  }
}

export const basicForm = () => <BasicForm />;

const customCode = `
// import * as React from 'react';
// import { Input, Button, Heading, Label, Icon, Link, Card } from 'design-system';

() => {
  class BasicForm extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        signInDisabled: true,
        passwordVisible: false,
        password: ''
      };

      this.emailRef = React.createRef();

      this.onEmailChange = this.onEmailChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
      this.onActionClick = this.onActionClick.bind(this);
    }

    onActionClick() {
      this.setState({
        passwordVisible: !this.state.passwordVisible
      });
    }

    onEmailChange(event) {
      const newPassword = this.state.password;
      const email = event.target.value;
      const disabled = !newPassword || !email;

      this.setState({
        signInDisabled: disabled
      });
    };

    onPasswordChange(event) {
      const email = this.emailRef.current.value;
      const newPassword = event.target.value;
      const disabled = !newPassword || !email;

      this.setState({
        password: newPassword,
        signInDisabled: disabled
      });
    }

    render() {
      return (
        <div style={{ width: '350px' }}>
          <Card className="px-6 py-6">
            <Heading className="mb-7" size="m">Login</Heading>
            <Label withInput={true}>Email</Label>
            <Input
              name="input"
              type="text"
              placeholder="Enter email"
              className="mb-6"
              ref={this.emailRef}
              autocomplete={'off'}
              onChange={this.onEmailChange}
            />
            <Label withInput={true}>Password</Label>
            <Input
              name="input"
              className="mb-4"
              placeholder="Enter password"
              autocomplete={'off'}
              type={this.state.passwordVisible ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.onPasswordChange}
              actionIcon={
                <Icon
                  name={this.state.passwordVisible ? 'visibility' : 'visibility_off'}
                  onClick={this.onActionClick}
                />
              }
            />
            <Link target="_blank" href="#">Forgot Password?</Link>
            <Button
              className="mt-7"
              appearance="primary"
              expanded={true}
              disabled={this.state.signInDisabled}
            >
              Sign In
            </Button>
          </Card>
        </div>
      );
    }
  }

  return <BasicForm />
}`;

export default {
  title: 'Patterns|Forms',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Basic Form',
        noProps: true
      }
    }
  }
};
