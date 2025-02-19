import os
import re

def batch_rename(folder_path):
  """
  批量重命名指定文件夹下文件名中包含"[]"的文件。

  Args:
    folder_path: 文件夹的绝对路径或相对路径。
  """
  for filename in os.listdir(folder_path):
    if filename.endswith(".js") and "[]" in filename: # 限制只处理.js文件 包含[]的
        old_filepath = os.path.join(folder_path, filename)
        new_filename = re.sub(r'\[\]', '', filename) # 使用正则替换
        new_filepath = os.path.join(folder_path, new_filename)
        
        try:
          os.rename(old_filepath, new_filepath)
          print(f"Renamed: {filename} -> {new_filename}")
        except Exception as e:
            print(f"Error renaming {filename}: {e}")

if __name__ == "__main__":
    folder = input("请输入文件夹路径：") # 获取用户输入
    if os.path.exists(folder):
        batch_rename(folder)
        print("重命名完成！")
    else:
        print("文件夹路径不存在，请检查。")