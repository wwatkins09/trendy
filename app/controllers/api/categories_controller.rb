class Api::CategoriesController < ApplicationController

  def create
    @category = Category.new(category_params)
    @user = current_user
    @category.user_id = @user.id
    if @category.save
      render 'api/categories/show'
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update

  end

  def show

  end

  def index
    @user = User.find(params[:user_id])
    render "api/categories/index"
  end

  private

  def category_params
    params.require(:category).permit(:name)
  end

end
