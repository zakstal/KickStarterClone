module Api
  class ProjectsController < ApplicationController

    def show

      @project = Project.find(params[:id])
      puts @project
      render :project
    end

    def create
      puts params
      @project = Project.new(project_params)

      if @project.save
        render json: @project
      else
        render json: @project.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def project_params
      params.require(:project).permit(:user_id, :description, :title, :catagory_id, :duration, :fundinggoal)
    end
  end
end
