import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind;
    this.onChangeDescription = this.onChangeDescription.bind;
    this.saveTutorial = this.saveTutorial.bind;
    this.newTutorial = this.newTutorial.bind;

    this.state = {
      id: null,
      title: "",
      description: "",
      published: false,
      submitted: false,
    };
  }
}
