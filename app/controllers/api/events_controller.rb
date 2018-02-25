class Api::EventsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    render 'api/events/index'
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

end
