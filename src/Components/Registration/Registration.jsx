import React from 'react';

const Registration = ({onRouteChange}) => {
    return(
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-1 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f3" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba
                  b--purple bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  // onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f3" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba
                  b--purple bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  // onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba
                  b--purple bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  // onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                // onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
        
    )
}

export default Registration;