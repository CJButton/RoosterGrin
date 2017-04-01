

class Api::PatientsController < ApplicationController

  def index
    @patients = Patient.all
  end

  def show
    @patient = Patient.find_by(id: params[:id].to_i)
  end

  private

  def patient_params
    params.require(:patient).permit(:id)
  end

end
