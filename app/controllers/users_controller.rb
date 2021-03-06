class UsersController < ApplicationController

  # before_filter :require_logged_in

  def new
    @user = Users.new
  end

  def create
    @user = Users.new(user_params)
    if @user.save
      log_in?(@user)

      # redirect_to user_url(@user)
      # make a swich if last url is from backbone got to below
      redirect_to root_url

    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @user = Users.find(params[:id])
  end

  def update
    @user = Users.find(params[:id])
    if @user.update_attributes(user_params)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :edit
    end


  end

  def show
    @user = Users.find(params[:id])
  end

  def destroy
    @user = Users.find(params[:id])
    @user.destroy
    redirect_to new_session_url
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
