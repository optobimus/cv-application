import React, { Component } from "react";

import uniqid from "uniqid";
import emptyAvatar from "../static/profile.webp";
import CVPreview from "./cvPreview/CVPreview";
import Form from "./form/Form";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      emptyCV: {
        personal: {
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
          <CVPreview cv={emptyCV}/>
        </div>  
      );
    }
}
  
  
export default Main;
  