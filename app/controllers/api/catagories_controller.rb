module Api
  class CatagoriesController < ApplicationController
    def index
      @cats = Catagorie::CATAGORIES
    end

    def show
      @catagory = Catagorie.find_by_catagory(params[:id])
      puts "HERE!!!!!!!!!!!!!!!!!!!!!!!"
      render :catagory
    end
  end
end
