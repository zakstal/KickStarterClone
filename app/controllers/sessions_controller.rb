class SessionsController < ApplicationController

  # before_filter :require_logged_in
  def new
    @user = Users.new
  end

  def create
    @user = Users.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )

    if @user
      log_in?(@user)
      redirect_to user_url(@user)
    else
      flash.now[:erros] = ['Invalid username or password']
      render :new
    end
  end

  def destroy
    log_out
    redirect_to new_session_url
  end

end
