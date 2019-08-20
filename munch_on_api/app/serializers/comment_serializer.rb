class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :comment_content, :snack_id
end
