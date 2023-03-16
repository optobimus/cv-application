import React, { Component } from "react";

import uniqid from "uniqid";
import emptyAvatar from "../static/profile.webp";
import Form from "./form";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      emptyCV: {
        personalInfo: {
          firstName: "",
          lastName: "",
          title: "",
          photo: emptyAvatar,
          address: "",
          phoneNumber: "",
          email: "",
          description: "",
        },
        experience: [
          {
            id: uniqid(),
            position: "",
            company: "",
            city: "",
            startDate: "",
            endDate: "",
          },
        ],
        education: [
          {
            id: uniqid(),
            university: "",
            city: "",
            degree: "",
            subject: "",
            startDate: "",
            endDate: "",
          },
        ],
      }
    }
  }
    render() {
      const { emptyCV } = this.state;
      return (
        <div>
          <Form cv={emptyCV}/>
        </div>  
      );
    }
}
  
  
export default Main;
  