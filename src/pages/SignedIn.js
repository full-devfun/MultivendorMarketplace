import React, { Component } from 'react';
import { auth, db } from '../Firebase'
import { connect } from "react-redux";

class SignedIn extends Component {
    state = { 
      loading: true
    }

    componentDidMount() {
      this.setState({
        loading: true
      })
    }

    componentDidUpdate(prevProps, prevState) {
        if (auth.currentUser) {
            let user = auth.currentUser;
            if (this.state.displayName !== user.displayName) {
              let { uid, displayName, email, photoURL, emailVerified } = user;
              this.setState({
                displayName
              })

              const { providerId } = user.providerData[0];

              db.collection("users")
                .doc(uid)
                .get()
                .then((userDoc) => {
                  if (userDoc.exists) {
                    return this.props.dispatch({
                      type: 'login_user',
                      payload: userDoc.data(),
                    });
                  } else {
                    return db
                      .collection("users")
                      .doc(uid)
                      .set({
                        displayName,
                        email,
                        uid,
                        photoURL: photoURL ? photoURL : null,
                        provider: providerId,
                        emailVerified: emailVerified
                          ? emailVerified
                          : false,
                        following: [],
                        email_options: {
                          marketing: true,
                        },
                      }).then(() => {
                        this.props.dispatch({
                          type: "login_user",
                          payload: {
                            displayName,
                            email,
                            uid,
                            photoURL: photoURL ? photoURL : null,
                            provider: providerId,
                            emailVerified: emailVerified
                              ? emailVerified
                              : false,
                            following: [],
                            email_options: {
                              marketing: true,
                            },
                          },
                        });
                      })
                  }
                });
            }
        }
    }

    render() { 
        return ( 
            <> </>
         );
    }
}
 
export default connect()(SignedIn);