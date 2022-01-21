class BookListsController < ApplicationController

    
    def index
        list = BookList.all
        render json: list, status: :ok
    end

    def show
        list = ReadingList.find(params[:id])
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

    def destroy
        list = BookList.find(params[:id])
        list.destroy
        head :no_content
    end
    
    def add_book
        list = ReadingList.find(params[:book_list_id])
        book = Book.find(params[:book_id])
        puts book.title
        if list.books.find_by(id: params[:book_id])
            render json: { error: "book already exist" }, status: :unprocessable_entity
        else
            list.books << book
            render json: list.reload, include: ['book_lists.book', 'user'], serializer: ReadingListSerializer, status: :ok
        end
    end

    def remove_book
        list = ReadingList.find(params[:reading_list_id])
        book = Book.find(params[:book_id])
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
