module Api
  class ProjectsController < ApplicationController

    def show

      @project = Project.find(params[:id])
      puts @project.title
      render :project
    end

    def create
      puts params
      @project = Project.new(project_params)

      if @project.save

        @project.pictures.destroy if !photo_params.empty? && !@project.pictures.nil?

        @project.pictures.create!(photo_params)
        puts "!!!!!!!!!!!!!!!!!!"
        puts photo_params
        puts @project.pictures
        puts"!!!!!!!!!!!!!!!!!!!!!!"
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

    def photo_params
      params.permit(:pic)
    end
  end
end
