class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    user = Users.find_by_session_token(session[:token])
  end

  def logged_in?
    !!current_user
  end

  def log_in?(user)
    current_user = user
    session[:token] = user.reset_session_token!
  end

  def log_out
    current_user.reset_session_token!
    session[:token] = nil
  end

  def require_logged_in
    unless logged_in?
      redirect_to new_session_url
    end
  end
end