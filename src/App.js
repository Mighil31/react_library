import React, { useState } from 'react';
import Header from './Components/Header';
// import Body from './Components/Body'
import FormContainer from './Components/FormContainer'
import Book from './Components/Book'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: this.props.bookData,
            showForm: false,
            editBook: false,
            id: this.props.bookData[this.props.bookData.length - 1].id,
            currentBook: null,
        }

        this.formToggle = this.formToggle.bind(this)
    }

    removeBook(id) {
        const filteredBooks = this.state.books.filter(ele => ele.id !== id)
        this.setState({
            books: filteredBooks
        })
    }

    formToggle() {
        this.setState((prev) => ({ showForm: !prev.showForm}))

        // if(!this.state.showForm) {
        //     this.setState({
        //         editBook: false,
        //     })
        // }
        // this.setState({
        //     currentBook: null
        // })
    }

    editBook = (formData) => {
        const toBeEdit = this.state.books.find(book => book.id === this.state.currentBook.id)
        this.removeBook(toBeEdit.id)
        this.setState(prevState => {
            return {
                books: [...prevState.books,
                {
                    id: prevState.id + 1,
                    title: formData.title,
                    author: formData.author,
                    pages: parseInt(formData.pages),
                    read: formData.read ? true : false,
                    image: formData.image
                    }],
                    id: prevState.id + 1,
                    editBook: false,
                    showForm: false
                }
        });
        this.formToggle()
    }

    createBook = (formData) => {
        console.log(formData)
        if(this.stateeditBook) {
            console.log("p")
            
        }
        else 
        {
            console.log("pww")
            this.setState(prevState => {
            return {
                books: [...prevState.books,
                {
                id: prevState.id + 1,
                title: formData.title,
                author: formData.author,
                pages: parseInt(formData.pages),
                read: formData.read ? true : false,
                image: formData.image
                }],
                id: prevState.id + 1
            }
            });
        }
    }

    showEditForm = (data) => {
        this.setState({
            currentBook: data,
            editBook: true,
        })
        this.formToggle();

    }


    render() 
    {
        return (
            <div>
                <Header 
                formToggle={this.formToggle} 
                showForm={this.state.showForm}/>
                <div className="main">
                    {
                        this.state.books.map(book => (
                            <Book 
                                key={book.id} 
                                index={book.id} 
                                bookData={book}
                                removeBook={() => this.removeBook(book.id)}
                                showEditForm={() => this.showEditForm(book)}
                            />
                        ))
                    }
                    
                    {
                        this.state.showForm &&
                            <FormContainer
                                createBook={this.createBook}
                                editBook={this.editBook}
                                formToggle={this.formToggle}
                            />
                    }

                    {
                        this.state.editBook &&
                            <FormContainer
                                createBook={this.createBook}
                                editBook={this.editBook}
                                currentBook={this.state.currentBook}
                                formToggle={this.formToggle}
                            />
                    }
                </div>
            </div>
            
        )
    }
    
}

export default App
