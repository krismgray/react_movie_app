class Api::MoviesController < ApplicationController
  before_action :set_api_movie, only: [:show, :update, :destroy]

  def index
    @api_movies = Movie.all
  end

  def show
  end

  def create
    @api_movie = Movie.new(api_movie_params)

    if @api_movie.save
      render: show
    else
      render json: @api_movie.errors, status: :unprocessable_entity
    end
  end

  def update
    if @api_movie.update(api_movie_params)
      render :show
    else
      render json: @api_movie.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @api_movie.destroy
  end

  private

  def set_api_movie
    @api_movie = Movie.find(params[:id])
  end

  def api_movie_params
    params.require(:movie).permit(:name, :description, :rating )
  end

end
