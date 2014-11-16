module Api
  class StoriesController < ApplicationController

    def create
      puts "in create!!!!!!!!!!!!!!!!!!"
      puts params
      @story = Story.new(story_params)

      if @story.save
          @story.project.pictures.create!(photo_params)
        render json: @story
      else
        puts @story.errors.full_messages
        render json: @story.errors.full_messages, status: :unprocessable_entity
      end


    end

    def update
      puts "in update!!!!!!!!!!!!!!!!!!"
      puts params
      @story = Story.find(params[:id])
        @story.project.pictures.destroy if !photo_params.empty? && !@user.pictures.nil?

        @story.project.pictures.create!(photo_params)

      if @story.update(story_params)
        render json: @story
      else
        puts @story.errors.full_messages
        render json: @story.errors.full_messages, status: :unprocessable_entity
      end

    end

    private

    def story_params
      params.require(:story).permit(:story, :challenges, :project_id, :id)
    end

    def photo_params
      params.permit(:pic)
    end
  end
end
