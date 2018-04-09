import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, submitSurvey, formValues, history }) => {
  // formValues is passed in via mapStateToProps  via the connect method below
  // submitSurvey is passed in as a prop via actions in the connect method below
  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <div>
        <button
          onClick={onCancel}
          className="yellow darken-3 white-text btn-flat"
        >
          Cancel
        </button>
        <button
          onClick={() => submitSurvey(formValues, history)}
          className="green white-text btn-flat right"
        >
          Send Survey
          <i className="material-icons right">email</i>
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
