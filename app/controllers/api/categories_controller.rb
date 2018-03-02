class Api::CategoriesController < ApplicationController

  def create

  end

  def update

  end

  def show

  end

  def index
    @user = User.find(params[:user_id])
    render "api/categories/index"
  end

end
