/**
 * 得到分页结果
 * 第一个参数: 第几页
 * 第二个参数: 每页多少条记录
 * 第三个参数: 一共有多少条记录
 * 第四个参数: 用于分页的数组
 * 返回: 指定的分页数据切片
 * @return {array}
 */
export const Pagination = (page, pageNumbers, allNumbers, arr) => {
  // 计算开始值
  let start_num = (page - 1) * pageNumbers;
  // 计算结束值
  let end_num = 0;
  if (start_num < allNumbers) {
    if (pageNumbers > (allNumbers - start_num)) {
      end_num = allNumbers
    } else {
      end_num = start_num + pageNumbers
    }
  } else {
    return []
  }
  return arr.slice(start_num, end_num)
};

/**
 * 获取非当前页的随机页
 * 参数1：一共有多少记录
 * 参数2：每页有多少记录（最后1页不考虑，因为可能有零头）
 * 参数3：当前是第几页
 * 返回：一个非当前页的随机页
 * @return {number}
 * */
export const RandomPage = (allNumber, num, currPage) => {
  if (allNumber < 1 || num < 1 || currPage < 1) {
    return 1
  }

  // 默认值
  let page = 0;

  // 先取一共有几页
  const max = Math.ceil(allNumber / num);

  // 如果值等于默认值，或者等于当前页，就继续循环，否则退出
  while ( page === 0 || page === currPage)
  {
    // 再返回 1 - 最大页之间的随机数
    // Math.random() 取得介于 0 到 1 之间的一个随机数
    // 所以内部的值为0.x - 5 之间的一个随机数
    // Math.ceil() 执行向上舍入，即它总是将数值向上舍入为最接近的整数
    // 所以最终的值为1 - 5之间的正整数
    page = Math.ceil(Math.random() * max);
  }

  return page
};
