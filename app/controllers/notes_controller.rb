class NotesController < ApplicationController

    def create
        note = Note.create!(note_params)
        render json: note, status: :created
    end

    private 

    def note_params
      params.permit(:note)
    end

end
