module Api
  class ProjectsController < ApplicationController

    def show

      @project = Project.find(params[:id])
      puts "here!!!!!!!!!!!!!!!!"
      puts @project.title
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

    def update
      puts params
      @project = Project.find(params[:id])

      if @project.update(project_params)
        render json: @project
      else
        puts @project.errors.full_messages
        render json: @project.errors.full_messages, status: :unprocessable_entity
      end

    end

    private

    def project_params
      params.require(:project).permit(:user_id, :description, :title, :catagory_id, :duration, :fundinggoal)
    end
  end
end
