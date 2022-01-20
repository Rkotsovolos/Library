class BookListsController < ApplicationController

    
    def index
        list = BookList.all
        render json: list, status: :ok
    end

    def show
        list = BookList.find(params[:id])
        render json: list
    end
    
    def create
        list = BookList.create!(list_params)
        render json: list, status: :created
    end
    
    def update
        list = BookList.find(params[:id])
        list.update!(list_params)
        render json: list, status: :accepted
    end
    
    def destroy
        list = BookList.find(params[:id])
        render json: list.destroy, status: :ok
    end
    
    def add_book
        list = BookList.find(params[:book_id])
    
        if list.books.find_by(id: book.id)
        render json: { error: "book already exist" }, status: :unprocessable_entity
        else
        list.books << book
        render json: list.reload, serializer: ListBookSerializer, status: :ok
        end
    end

    def remove_book
        list = BookList.find(params[:reading_list_id])
        list.books.delete(book)

        render json: list.reload
    end

  private 

  def list_params
    params.permit(:name, :reading_list_id)
  end

  def book
    book ||= Book.find(params[:book_id])
  end

    
end
