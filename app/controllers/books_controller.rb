class BooksController < ApplicationController


    def index
        books = Book.all
        render json: books, status: :ok
    end

    def show
        book = Book.find(params[:id]) 
        render json: item, status: :ok
    end

    private 

    def item_params
        params.permit(:title, :author, :image, :page_count)
    end

end
