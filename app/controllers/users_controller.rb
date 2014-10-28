class UsersController < ApplicationController
  # before_filter :require_logged_in
  def new
    @user = Users.new
  end

  def create
    @user = Users.new(user_params)

    if @user.save
      log_in?(@user)
      redirect_to user_url(@user)
    else
      flash.now[:erros] = @user.errors.full_messages
      render :new
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
    params.require(:user).permit(:username, :password)
  end

end
