class AssignmentsController < ApplicationController

    def create
        @assignment = Assignment.create(assignment_params)
        render json: @assignment
    end

    private

    def assignment_params
        params.permit(:name, :classroom_id)
    end

end
