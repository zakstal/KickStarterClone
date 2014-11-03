module Api
  class ProjectsController < ApplicationController
    before_filter :store_location, only: [:new, :edit]
    before_filter :require_logged_in, except: [:show]

    def new
      @project = Project.new
    end

    def create
      @project = Project.new(project_params)

      if @project.save
         @catagorie = Catagorie.new(catagory: @project.catagory_id, project_id: @project.id)
         @catagorie.save
        # redirect to new rewards
        redirect_to project_rewards_url(@project)
        #new_project_reward_url(@project)
      else
        flash.now[:errors] =  @project.errors.full_messages
        render :new
      end
    end

    def edit
      @project = Project.find(params[:id])
    end

    def update
       @project = Project.find(params[:id])

      if @project.update_attributes(project_params)
        redirect_to users_url
      else
        flash.now[:errors] = @project.errors.full_messages
        render :edit
      end

    end

    def show
      @project = Project.find(params[:id])
    end

    def destroy
      @project = Project.find(params[:id])
      @project.destroy
      redirect_to user_url(@project.user_id)
    end

    private

    def project_params
      params.require(:project).permit(:user_id, :description, :title, :catagory_id, :duration, :fundinggoal)
    end
  end
end