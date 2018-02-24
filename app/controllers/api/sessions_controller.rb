class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:credentials][:email], params[:credentials][:password])
    if @user
      login(@user)
      render "api/session/current_user"
    else
      render json: ["Invalid credentials"], status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/session/current_user"
    else
      render json: ["No one logged in"], status: 404
    end
  end

end
