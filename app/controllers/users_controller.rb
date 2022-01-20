class UsersController < ApplicationController

  def show
    user = User.find_by(id: session[:user_id])
      if user
        render json: user, status: :ok
      else
        render json: { error: "Not authenticated" }, status: :unauthorized
      end
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end
    
      
  def destroy 
    user = User.find(params[:id])
    user.destroy 
    head :no_content 
  end
 
  private
    
  def user_params
    params.permit(:username, :password)
  end
  

end
