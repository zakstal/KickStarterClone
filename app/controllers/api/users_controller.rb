
module Api
  class UsersController < ApplicationController

    # before_filter :require_logged_in
    def new
      @user = Users.new
      render json: @user
    end

    def create
      @user = Users.new(user_params)
      if @user.save
        log_in?(@user)
        render json: @user
      else
        render json: @user.errors.full_messages, status: :unprocessable_entity
      end
    end

    def edit
      @user = Users.find(params[:id])
      render json: @user
    end

    def update
      @user = Users.find(params[:id])
      if @user.update_attributes(user_params)
        render json: @user
      else
         render json: @user.errors.full_messages, status: :unprocessable_entity
      end


    end

    def show
      @user = Users.find(params[:id])
      render json: @user
    end

    def destroy
      @user = Users.find(params[:id])
      @user.destroy
      render json: @user
    end

    private

    def user_params
      params.require(:user).permit(:email, :password)
    end

  end
end