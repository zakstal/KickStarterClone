
def get_month(num)
  mons = %w(Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec)
  mons[num]
end

def make_date_string(user)
  month = user.created_at.month
  year = user.created_at.year.to_s
  get_month(month.to_i - 1) + " " + year
end


json.comment                @comment.comment
json.comment_date           make_date_string(@comment)
json.user_id                @comment.user.id
json.user_name              @comment.user.name
if @comment.user.pictures.first.nil?
  json.that_url image_path('dog.jpg')
else
  json.that_url @comment.user.pictures.last.pic.url
end
