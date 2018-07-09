def confirm
  if @order.completed?
    OrderMailer.confirm_email(@order).deliver_now
    redirect_to edit_admin_order_url(@order)
  elsif !@order.can_complete?
    render template: 'spree/admin/orders/confirm_advance'
  end
end
