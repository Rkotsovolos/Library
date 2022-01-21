class BooksController < ApplicationController


    def index
        books = Book.all
        render json: books, status: :ok
    end

    def show
        book = Book.find(params[:id]) 
        render json: book, status: :ok
    end

    def create
        book = Book.create!(book_params)
        render json: book, status: :created
    end

    def destroy
        book = Book.find_by(id: params[:id])
        book.destroy
        head :no_content
    end

    private 

    def book_params
        params.permit(:title, :author, :image)
    end

end
