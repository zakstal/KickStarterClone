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

  def store_location
    return unless request.get?
    if (request.path != "/sessions/new" &&
        request.path != "/users/new" &&
        !request.xhr?)
      if request.format == "text/html" || request.content_type == "text/html"
        session[:previous_url] = request.fullpath
        session[:last_reqeust_time] = Time.now.utc.to_i
      end
    end
  end

  def reset_previous_url
    session[:previous_url] = nil
  end

  def redirect_after_require_login_or(default_url)
    previous_url = session[:previous_url]
    logged_at = session[:last_reqeust_time]
    reset_previous_url
    if previous_url && logged_at > 5.minutes.ago.to_i
      redirect_to previous_url
    else
      redirect_to default_url
    end
  end

end
