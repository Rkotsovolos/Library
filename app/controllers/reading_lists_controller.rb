class ReadingListsController < ApplicationController


    def index
        list = ReadingList.all
        render json: list, status: :ok
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

    private

    def list_params
        params.permit(:name)
    end


end
