class ReadingListsController < ApplicationController


    def index
        user = User.find(session[:user_id])
        list = user.reading_lists
        render json: list, include: ['book_lists.book', 'user'], status: :ok
    end

    def show
        list = ReadingList.find(params[:id])
        render json: list
    end

    def create
        user = User.find(session[:user_id])
        list = user.reading_lists.create(list_params)
        render json: list, status: :created
    end

    def destroy
        list = ReadingList.find(params[:id])
        render json: list.destroy, status: :ok
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
