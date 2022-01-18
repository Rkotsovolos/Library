class ListBooksController < ApplicationController

    
    def index
        list = List_Book.all
        render json: list, status: :ok
    end

    def show
        list = List_Book.find(params[:id])
        render json: list
    end
    
    def create
        list = List_Book.create!(list_params)
        render json: list, status: :created
    end
    
    def update
        list = List_Book.find(params[:id])
        list.update!(list_params)
        render json: list, status: :accepted
    end
    
    def destroy
        list = List_Book.find(params[:id])
        render json: list.destroy, status: :ok
    end
    
    def add_book
        list = List_Book.find(params[:list_id])
    
        if list.books.find_by(id: book.id)
        render json: { error: "book already exist" }, status: :unprocessable_entity
        else
        list.books << book
        render json: list.reload
        end
    end

    def remove_book
        list = List_Book.find(params[:list_id])
        list.books.delete(book)

        render json: list.reload
    end

  private 

  def list_params
    params.permit(:name, :user_id)
  end

  def book
    book ||= Book.find(params[:book_id])
  end

    
end
