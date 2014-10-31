class StoriesController < ApplicationController

    before_filter :require_logged_in, except: [:show]

  def index
    @storys = Story.where(project_id: params[:project_id])
  end

  def new
    @story = Story.new(project_id: params[:project_id])
  end

  def create
    @story = Story.new(story_params)
    if @story.save
      bio_id = current_user.user_bio.id
      redirect_to  (current_user.user_bio.persisted? ? edit_user_bio_url(bio_id) : new_user_user_bio_url(current_user.id))

    else
      flash.now[:errors] = @story.errors.full_messages
      render :new
    end
  end

  def edit
    @story = Story.find(params[:id])
  end

  def update
    @story = Story.find(params[:id])
    if @story.update_attributes(story_params)
      redirect_to user_url(current_user.id)
    else
      flash.now[:errors] = @story.errors.full_messages
      render :edit
    end


  end

  def show
    @story = Story.find(params[:id])
  end

  def destory
    @story = Story.find(params[:id])
    @story.destory
    redirect_to users_url
  end

  private

  def story_params
    params.require(:stories).permit(:story, :challenges, :project_id)
  end
end
