---
title: watch选项
---
[[toc]]



你可以配置TS `--watch` 如何工作。本节主要用于处理 `fs.watch` 和 `fs.watchFile` 具有附加约束的情况，例如在 Linux 上。你可以阅读 [Configuring Watch](https://www.typescriptlang.org/docs/handbook/configuring-watch.html) 了解更多。





## `watchFile`

这个配置用于单个文件如何被监测的策略。

- `fixedPollingInterval`： 以固定周期，检测文件每秒变化多少次
- `priorityPollingInterval`：检测每个文件1s内更改几次，但是使用`启发式`检查某些类型的文件的频率要低于其他类型的文件
- `dynamicPriorityPolling`：使用动态队列，修改频率低的文件被检测的越少
- `useFsEvents`(默认)：对文件变化，尝试使用操作系统或文件系统原生事件来检测
- `useFsEventsOnParentDirectory`：尝试使用操作系统，文件系统原生事件监听文件父目录的变化



::: tip 💡

可能值：

- `fixedPollingInterval`
- `priorityPollingInterval`
- `dynamicPriotityPolling`
- `fixedChunkSizePolling`
- `useFsEvents`
- `useFsEventsOnParentDirectory`

:::





## `watchDirectory`

在缺乏递归文件监视功能的系统下，如何监视整个目录树的策略。

- `fixedPollingInterval`: 以固定周期，检测文件每秒变化多少次
- `dynamicPriorityPolling`： 使用动态队列，修改频率低的目录被检测的越少
- `useFsEvents` (默认)：尝试对目录变更使用操作系统或文件系统原生事件

::: tip 💡

可能值：

- `fixedPollingInterval`
- `dynamicPriotityPolling`
- `fixedChunkSizePolling`
- `useFsEvents`

:::



## `fallbackPolling`

当使用文件系统事件，这个配置项用于当原生事件watchers用完 `&|` 不支持原生文件watchers时， 指定回退的轮询策略。

- `fixedPollingInterval`：以固定周期，检测文件每秒变化多少次
- `priorityPollingInterval`: 检测文件每秒变化多少次，但是使用`启发式`检查某些类型的文件的频率要低于其他类型的文件
- `dynamicPriorityPolling`：使用动态队列，修改频率低的文件被检测的越少
- `synchronousWatchDirectory`：禁用对目录的延迟检测。延迟监测对很多文件可能同时变化很有用（比如：通过允许 `npm install` ，`node_modules` 的变化），但是对于一些不太常见的设置，你可能需要使用这个标志来禁用它。

::: tip 💡

可能值：

- `fixedPollingInterval`
- `priorityInterval`
- `dynamicPriotityPolling`
- `fixedChunkSize`

:::



## `synchronousWatchDirectory`

在不支持原生递归监视的平台上，同步调用回调并更新目录监视程序的状态。而不是给出一个小超时，以允许在一个文件上可能发生多个编辑。

```json
{
  "watchOptions": {
    "synchronousWatchDirectory": true
  }
}
```





## `excludeDirectories`

你可以使用 excludeFiles 极大的减少使用 `--watch` 选项时监测的文件数量。这是一种很有用的方法，可以减少TypeScript在Linux上跟踪的打开文件的数量。



```json
{
  "watchOptions": {
    "excludeDirectories": ["**/node_modules", "_build", "temp/*"]
  }
}
```



## `excludeFiles`

你可以使用这个配置从监视的文件中删除一组特定的文件。



```json
{
  "watchOptions": {
    "excludeFiles": ["temp/file.ts"]
  }
}
```



原文档：

- [Watch Options](https://www.typescriptlang.org/tsconfig#watch-options)



2022年08月22日23:42:49
