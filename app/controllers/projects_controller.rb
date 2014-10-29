class ProjectsController < ApplicationController

  before_filter :require_logged_in, except: [:show]

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      # redirect to new rewards
      redirect_to users_url
    else
      fail
      flash.now[:errors] = ["There was a problem with your submission"]
      render :new
    end
  end

  def edit
    @prject = Project.find(params[:id])
  end

  def update
     @prject = Project.find(params[:id])

    if @prject.update_attributes(project_params)

    else
      flash.now[:errors] = @user.errors.full_messages
      render :edit
    end


  end

  def show
    @prject = Project.find(params[:id])
  end

  def destroy
    @prject = Project.find(params[:id])
    @prject.destroy
    redirect_to new_user_project(@project.user_id)
  end

  private

  def project_params
    params.require(:project).permit(:user_id, :description, :title, :catagorie_id, :duration, :fundinggoal)
  end
end
