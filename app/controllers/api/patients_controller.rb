

class Api::PatientsController < ApplicationController

  def index
    @patients = Patient.all
  end

  def show
    @patient = Patient.find_by(patient_params[:patient_id].to_i)
  end

  private

  def patient_params
    params.require(:patient).permit(:patient_id)
  end

end
