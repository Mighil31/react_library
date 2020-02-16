import React from 'react';
import Form from './Form'

class FormContainer extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.currentBook)
        this.state = {
            title: props.currentBook ? props.currentBook.title : '',
            author: props.currentBook ? props.currentBook.author : '',
            pages: props.currentBook ? props.currentBook.pages : '',
            image: props.currentBook ? props.currentBook.image : '',
            read: props.currentBook ? props.currentBook.read : ''
        };
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
  
    handleChange(event) {
        const { name, value, type, checked} = event.target;
        type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({ [name]: value }) 
    }
  
    handleSubmit(event) {
        event.preventDefault();

        if(this.state.title && this.state.author && this.state.pages) {
            this.props.createBook(this.state);
            this.props.formToggle();
            this.setState = {
                title: '',
                author: '',
                pages: '',
                image: '',
                read: false
            };
        }
    }

    handleEdit(event) {
        event.preventDefault();

        if(this.state.title && this.state.author && this.state.pages) {
            this.props.editBook(this.state);
            this.props.formToggle();
            this.setState = {
                title: '',
                author: '',
                pages: '',
                image: '',
                read: false
            };
        }
    }

  
    render() {
    
        return (
            <Form
                data={this.state}
                edit={this.props.currentBook}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleEdit={this.handleEdit}
            />
        )
      }
    }


export default FormContainer