def ship
  authorize! :ship, @shipment
  unless @shipment.shipped?
    @shipment.suppress_mailer = (params[:send_mailer] == 'false')
    @shipment.ship!
    ShipmentMailer.confirm_shipment(@order).deliver_now
  end
  respond_with(@shipment, default_template: :show)
end
