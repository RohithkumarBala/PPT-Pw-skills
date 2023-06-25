# Move Zeroes
# Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
# Note that you must do this in-place without making a copy of the array.

nums=list(map(int,input().split()))
n=len(nums)
nonzero=0
for i in range(n):
    if nums[i]!=0:
        nums[nonzero]=nums[i]
        nonzero+=1
while nonzero<n:
    nums[nonzero]=0
    nonzero+=1
print(nums)
