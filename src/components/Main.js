import React, { useState, useEffect } from "react";
import uniqid from "uniqid"

import "../styles/main.css"

import CVPreview from "./cvPreview/CVPreview";
import exampleCV from "./utils/exampleCV";
import emptyCV from "./utils/emptyCV";
import Form from "./form/Form";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Main(props) {

  const [cv, setCV] = useState(emptyCV);

  const handleChangePersonal = (e) => {
    const { name, value, type } = e.target;
    
    if (type === 'file') {
      handleChangeFile(e);
      return;
    }

    setCV(prevCV => ({
      ...prevCV,
      personal: {
        ...prevCV.personal,
        [name]: value,
      }
    }));
  }

  const handleChangeFile = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCV(prevCV => ({
        ...prevCV,
        personal: {
          ...prevCV.personal,
          [name]: reader.result,
        },
      }));
    };
    reader.readAsDataURL(file);
  }

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;
    setCV(prevCV => {
      const newExperience = prevCV.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return { ...prevCV, experience: [...newExperience] };
    });
  }

  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;
    setCV(prevCV => {
      const newEducation = prevCV.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...prevCV, education: [...newEducation] };
    });
  }

  const handleAddExperience = () => {
    if (cv.experience.length < 5) {
      setCV((prevCV) => ({
        ...prevCV,
        experience: [
          ...prevCV.experience,
          {
            id: uniqid(),
            position: '',
            company: '',
            city: '',
            startDate: '',
            endDate: '',
          },
        ],
      }));
    }
  }

  const handleAddEducation = () => {
    if (cv.education.length < 5) {
      setCV((prevCV) => ({
          ...prevCV,
          education: [
            ...prevCV.education,
            {
              id: uniqid(),
              university: '',
              city: '',
              degree: '',
              subject: '',
              startDate: '',
              endDate: '',
            },
          ],
      }));
    }
  }

  const handleDeleteExperience = (id) => {
    setCV((prevCV) => {
      const newExperience = prevCV.experience.filter((experienceItem) => {
        return experienceItem.id !== id;
      });
      return { ...prevCV, experience: newExperience };
    });
  }

  const handleDeleteEducation = (id) => {
    setCV((prevCV) => {
      const newEducation = prevCV.education.filter((educationItem) => {
        return educationItem.id !== id;
      });
      return { ...prevCV, education: newEducation };
    });
  }

  const handleLoadExample = () => {
    setCV(exampleCV);
  }

  const handleReset = () => {
    setCV(emptyCV);
  }

  const handlePDF = () => {
    const cvPreview = document.querySelector('.cv-preview');
    if (!cvPreview) return;

    const originalStyle = cvPreview.getAttribute('style');

    // create a new element to clone and add the same styles as the original
    const clone = cvPreview.cloneNode(true);
    clone.removeAttribute('style');
    clone.style.borderRadius = '0';
    clone.style.padding = '0';
    clone.style.width = `${cvPreview.offsetWidth}px`;
    clone.style.height = `${cvPreview.offsetHeight}px`;
    document.body.appendChild(clone);

    const options = {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      windowWidth: cvPreview.offsetWidth,
      windowHeight: cvPreview.offsetHeight,
      logging: true,
      onclone: (doc) => {
        const element = doc.querySelector('.cv-preview');
        element.style.borderRadius = '0 0 0 0';
      },
      removeContainer: true,
    };

    html2canvas(clone, options).then(canvas => {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
      pdf.save('cv.pdf');

      // remove the cloned element and restore the original styles
      document.body.removeChild(clone);
      cvPreview.setAttribute('style', originalStyle);
    });
  }

  return (
    <div className="main">
      <Form 
        cv={cv}
        onChangePersonal={handleChangePersonal}
        onChangeExperience={handleChangeExperience}
        onChangeEducation={handleChangeEducation}
        onAddExperience={handleAddExperience}
        onAddEducation={handleAddEducation}
        onDeleteExperience={handleDeleteExperience}
        onDeleteEducation={handleDeleteEducation}
        onLoadExample={handleLoadExample}
        onPDF={handlePDF}
        onReset={handleReset}
      />
      <CVPreview cv={cv}/>
    </div>  
  );
}
  
  
export default Main;
  
// 231 to 209