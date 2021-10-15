# 1- Find pair that sums
# up to k
# Description
# Given an array of integers arr and an integer k, create a boolean
# function that checks if there exists two elements in arr such that
# we get k when we add them together.
# Example 1:
# • Input: arr = [4, 5, 1, -3, 6], k = 11
# • Output: true
# • Explanation: 5 + 6 is equal to 11
# Example 2:
# • Input: arr = [4, 5, 1, -3, 6], k = -2
# • Output: true
# • Explanation: 1 + (-3) is equal to -2
# Example 3:
# • Input: arr = [4, 5, 1, -3, 6], k = 8
# • Output: false
# • Explanation: there is no pair that sums up to 8

# By checking all pairs (brute force solution):

# Time complexity: O(n²)
# Space complexity: O(1)

def findPair(arr, k):
  for i in range(len(arr)):
    for j in range(i+1, len(arr)):
      if arr[i] + arr[j] == k:
        return True
  return False
