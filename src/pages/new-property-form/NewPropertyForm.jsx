import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import Header from '../../components/header/Header';
// import Icon from '../../components/icon/Icon';
import Input from '../../components/input/Input';
import ConfirmationModal from '../../components/confirmation-modal/ConfirmationModal';
import Navigation from '../../components/navigation/Navigation';
import { propertyManagers } from '../../data';
import Search from '../../components/search/Search';
import './NewPropertyForm.scss';

class NewPropertyForm extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);

    this.handleSelectionFromSearch = this.handleSelectionFromSearch.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleChange = this.handleChange.bind(this);

    // this.handleAddNewProperty = this.handleAddNewProperty.bind(this);
    //
    // this.handleNewPropertyFormSubmit = this.handleNewPropertyFormSubmit.bind(this);

    this.toggleConfirmationModal = this.toggleConfirmationModal.bind(this);

    this.isSaveEnabled = this.isSaveEnabled.bind(this);

    this.state = {
      showModal: false,
      propertyManagerSelected: "",
      properties: {
        name: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        numberOfUnits: ""
      }
    };
  }

  toggleConfirmationModal(event) {
    event.preventDefault();
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }

  handleSearch(event) {
    const { target } = event;
    const { id } = target;
    const { value } = target;
    this.setState({
      [id]: value
    });
  }

  handleChange(event) {
    event.preventDefault();
    const { target } = event;
    const { name } = target;
    const { value } = target;
    this.setState(prevState => ({
      properties: { ...prevState.properties, [name]: value}
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { target } = event;
    const { name } = target;
    const { value } = target;
    this.setState(prevState => ({
      properties: { ...prevState.properties, [name]: value}
    }));
    this.toggleConfirmationModal(event);
  }

  handleSelectionFromSearch(nameSearched) {
    if
     (Object.keys(nameSearched).includes('name')) {
      this.setState({ propertyManagerSelected: nameSearched });
      console.log(nameSearched);
      console.log(this.state);
    }
  }

  isSaveEnabled() {
   const propertyName = this.state.properties.name;
   const propertyAddress = this.state.properties.address;
   const propertyCity = this.state.properties.city;
   const propertyState = this.state.properties.state;
   const propertyZipCode = this.state.properties.zipCode;
   const propertyUnits = this.state.properties.numberOfUnits;
   if(propertyName && propertyAddress && propertyCity && propertyState && propertyZipCode && propertyUnits){
      return true;
   }
   return false;
 }

// Next two functions are not currently in use. Could be rewritten for use later.

  // handleAddNewProperty(newProperty) {
  //   const newPropertyList =  this.state.properties;
  //   newPropertyList.push(newProperty);
  //   this.setState(prevState => ({
  //     properties: prevState.newPropertyList
  //   }));
  // }
  //
  //
  // handleNewPropertyFormSubmit(event) {
  // event.preventDefault();
  // const propertyName = '';
  // this.handleAddNewProperty({propertyName: propertyName.value});
  //   propertyName.value = '';
  // }

// End useless functions


  render() {
    const isEnabled = this.isSaveEnabled();

    return (
      <div className="admin page">
        <Header>
          {() => (
            <div>
              <Navigation />
              <Header.Label
                label="JOIN Messenger Administration"
                type="basic"
              />
            </div>
          )}
        </Header>
        <div>
          <div className="width-wrapper">
            <h2 className="admin--header align--left">
              Add a New Property
            </h2>
            <form id="newPropertyForm">
            <section className="newPropertyFormSection">
              <h2 className="newPropertyFormHeading">Property Information</h2>
                <Input
                  id="name"
                  name="name"
                  label="Name"
                  type="text"
                  value={this.state.properties.name}
                  placeholder="Property Name"
                  onChange={this.handleChange}
                />
                <Input
                  id="address"
                  name="address"
                  label="Address"
                  type="text"
                  placeholder="Property Address"
                  onChange={this.handleChange}
                />
                <Input
                  id="city"
                  name="city"
                  label="City"
                  type="text"
                  placeholder="City"
                  onChange={this.handleChange}
                />
                <Input
                  id="state"
                  name="state"
                  label="State"
                  type="text"
                  placeholder="State"
                  onChange={this.handleChange}
                />
                <Input
                  id="zipCode"
                  name="zipCode"
                  label="Zipcode"
                  type="text"
                  placeholder="Zip"
                  onChange={this.handleChange}
                />
                <Input
                  id="numberOfUnits"
                  name="numberOfUnits"
                  label="Units"
                  type="text"
                  placeholder="Units"
                  onChange={this.handleChange}
                />
            </section>
            <section className="newPropertyFormSection">
              <h2 className="newPropertyFormHeading">Assign Property Managers</h2>
              <fieldset>
                <Search
                  searchData={propertyManagers}
                  placeholder= "Search Property Managers"
                  filterSubset={['firstName', 'lastName', 'name']}
                  onSearchSelection={this.handleSelectionFromSearch}
                  multiple
                />
              </fieldset>
            </section>
            <section className="newPropertyFormSection">
              <button onClick={this.toggleConfirmationModal}
                disabled={!isEnabled}
                type="submit"
                className="btn">
                Save
              </button>
            </section>
          </form>
          </div>
        </div>
        <ConfirmationModal
          show={this.state.showModal}
          onClose={this.toggleConfirmationModal}
          onSubmit={this.handleSubmit}>
          Are you sure you want to save {this.state.properties.name}, {this.state.properties.address} {this.state.properties.city}, {this.state.properties.state} {this.state.properties.zipCode}
          ?
        </ConfirmationModal>
      </div>
    );
  }
}

NewPropertyForm.propTypes = {
  // properties: PropTypes.string,
  // name: PropTypes.string.isRequired,
  // address: PropTypes.string.isRequired,
  // city: PropTypes.string.isRequired,
  // state: PropTypes.string.isRequired,
  // zipCode: PropTypes.string.isRequired,
  // numberOfUnits: PropTypes.string.isRequired,
};

export default injectIntl(NewPropertyForm);
